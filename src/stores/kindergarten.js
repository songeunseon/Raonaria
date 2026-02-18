import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import kinderJson from '@/assets/일반현황.json'
import shuttleJson from '@/assets/통학차량.json'

export const useKindergartenStore = defineStore('kindergarten', () => {
  const selectedKinder = ref(null)
  const comparisonList = ref([])
  const loading = ref(false)

  // JSON 데이터를 통일된 필드명으로 변환
  function mapJsonKinder(item, index) {
    return {
      id: 'json_' + index,
      educationOffice: item['일반 현황'] || '',
      educationSupportOffice: item['Column2'] || '',
      name: item['Column3'] || '',
      establishmentType: item['Column4'] || '',
      representative: item['Column5'] || '',
      principal: item['Column6'] || '',
      foundedDate: item['Column7'] || '',
      openedDate: item['Column8'] || '',
      address: item['Column9'] || '',
      phone: item['Column10'] || '',
      website: item['Column11'] || '',
      operatingHours: item['Column12'] || '',
      classCount3: item['Column13'] || 0,
      classCount4: item['Column14'] || 0,
      classCount5: item['Column15'] || 0,
      mixedClassCount: item['Column16'] || 0,
      specialClassCount: item['Column17'] || 0,
      totalCapacity: item['Column18'] || 0,
      capacity3: item['Column19'] || 0,
      capacity4: item['Column20'] || 0,
      capacity5: item['Column21'] || 0,
      students3: item['Column24'] || 0,
      students4: item['Column25'] || 0,
      students5: item['Column26'] || 0,
      mixedStudents: item['Column27'] || 0,
      specialStudents: item['Column28'] || 0,
    }
  }

  function mapJsonShuttle(item, index) {
    return {
      id: 'shuttle_' + index,
      facilityName: item['row3'] || '',
      operationStatus: item['row6'] || '',
    }
  }

  function enrichKinders(rawKinders, rawShuttles) {
    return rawKinders.map(k => {
      const shuttle = rawShuttles.find(s => s.facilityName === k.name)
      return {
        ...k,
        vehicleOperation: shuttle?.operationStatus || '',
        directorName: k.principal || '',
        openDate: k.openedDate || '',
        age3Students: k.students3 || 0,
        age4Students: k.students4 || 0,
        age5Students: k.students5 || 0,
        age3Capacity: k.capacity3 || 0,
        age4Capacity: k.capacity4 || 0,
        age5Capacity: k.capacity5 || 0,
        specialClasses: k.specialClassCount || 0,
      }
    })
  }

  // JSON 데이터를 즉시 로드 (스토어 생성 시점)
  const initKinders = kinderJson.map((item, i) => mapJsonKinder(item, i))
  const initShuttles = shuttleJson.map((item, i) => mapJsonShuttle(item, i))
  const shuttleVehicles = ref(initShuttles)
  const kindergartens = ref(enrichKinders(initKinders, initShuttles))

  async function fetchAll() {
    // JSON은 이미 로드됨 → Firestore에 데이터가 있으면 덮어쓰기
    loading.value = true
    try {
      const kinderSnap = await getDocs(collection(db, 'kindergartens'))
      if (kinderSnap.docs.length > 0) {
        const rawKinders = kinderSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        const shuttleSnap = await getDocs(collection(db, 'shuttleVehicles'))
        const rawShuttles = shuttleSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        shuttleVehicles.value = rawShuttles
        kindergartens.value = enrichKinders(rawKinders, rawShuttles)
      }
    } catch (err) {
      console.warn('Firestore 연결 실패 (JSON 데이터 사용 중):', err)
    } finally {
      loading.value = false
    }
  }

  function search(filters) {
    let results = [...kindergartens.value]

    if (filters.keyword) {
      const lower = filters.keyword.toLowerCase()
      results = results.filter(k =>
        k.name?.toLowerCase().includes(lower) ||
        k.address?.toLowerCase().includes(lower)
      )
    }
    if (filters.region) {
      results = results.filter(k => k.address?.includes(filters.region))
    }
    if (filters.operationType) {
      // '운영' means vehicle operation, '1' means special class exists
      if (filters.operationType === '운영') {
        results = results.filter(k => k.vehicleOperation === '운영')
      } else if (filters.operationType === '1') {
        results = results.filter(k => Number(k.specialClassCount) > 0)
      }
    }
    if (filters.establishmentType) {
      if (filters.establishmentType === '국립/공립') {
        results = results.filter(k => k.establishmentType?.includes('공립'))
      } else if (filters.establishmentType === '사립') {
        results = results.filter(k => k.establishmentType?.includes('사립'))
      }
    }
    if (filters.uclass) {
      const age = Number(filters.uclass)
      if (age === 3) results = results.filter(k => Number(k.classCount3) > 0)
      if (age === 4) results = results.filter(k => Number(k.classCount4) > 0)
      if (age === 5) results = results.filter(k => Number(k.classCount5) > 0)
    }

    return results
  }

  function getShuttleInfo(kindergartenName) {
    return shuttleVehicles.value.find(s => s.facilityName === kindergartenName)
  }

  function selectKinder(kinder) {
    selectedKinder.value = kinder
  }

  function addToComparison(kinder) {
    if (comparisonList.value.length < 2 && !comparisonList.value.find(k => k.id === kinder.id)) {
      comparisonList.value.push(kinder)
    }
  }

  function removeFromComparison(kinderId) {
    comparisonList.value = comparisonList.value.filter(k => k.id !== kinderId)
  }

  function clearComparison() {
    comparisonList.value = []
  }

  return {
    kindergartens, shuttleVehicles, selectedKinder, comparisonList, loading,
    fetchAll, search, getShuttleInfo, selectKinder,
    addToComparison, removeFromComparison, clearComparison
  }
})
