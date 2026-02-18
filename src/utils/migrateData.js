/**
 * Firestore 데이터 마이그레이션 유틸
 * 브라우저 콘솔이나 별도 스크립트에서 한 번만 실행
 * 사용법: 아무 컴포넌트에서 import 후 호출하거나 브라우저 콘솔에서 실행
 */
import { db } from '@/utils/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import kinderData from '@/assets/일반현황.json'
import shuttleData from '@/assets/통학차량.json'

// 일반현황 JSON → Firestore kindergartens 컬렉션
export async function migrateKindergartens() {
  const colRef = collection(db, 'kindergartens')

  // 이미 데이터가 있으면 건너뜀
  const existing = await getDocs(colRef)
  if (!existing.empty) {
    console.log(`kindergartens 컬렉션에 이미 ${existing.size}개 데이터가 있습니다. 건너뜁니다.`)
    return
  }

  let count = 0
  for (const item of kinderData) {
    await addDoc(colRef, {
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
      mixedCapacity: item['Column22'] || 0,
      specialCapacity: item['Column23'] || 0,
      students3: item['Column24'] || 0,
      students4: item['Column25'] || 0,
      students5: item['Column26'] || 0,
      mixedStudents: item['Column27'] || 0,
      specialStudents: item['Column28'] || 0,
    })
    count++
  }
  console.log(`kindergartens: ${count}개 문서 마이그레이션 완료`)
}

// 통학차량 JSON → Firestore shuttleVehicles 컬렉션
export async function migrateShuttleVehicles() {
  const colRef = collection(db, 'shuttleVehicles')

  const existing = await getDocs(colRef)
  if (!existing.empty) {
    console.log(`shuttleVehicles 컬렉션에 이미 ${existing.size}개 데이터가 있습니다. 건너뜁니다.`)
    return
  }

  let count = 0
  for (const item of shuttleData) {
    await addDoc(colRef, {
      educationOffice: item['통학차량 현황'] || '',
      educationSupportOffice: item['row2'] || '',
      facilityName: item['row3'] || '',
      establishmentType: item['row4'] || '',
      address: item['row5'] || '',
      operationStatus: item['row6'] || '',
      totalVehicles: item['row7'] || 0,
      operatingVehicles: item['row8'] || 0,
      nonOperatingVehicles: item['row9'] || 0,
      ownedVehicles: item['row10'] || 0,
      charteredVehicles: item['row11'] || 0,
    })
    count++
  }
  console.log(`shuttleVehicles: ${count}개 문서 마이그레이션 완료`)
}

// 전체 마이그레이션
export async function migrateAll() {
  console.log('=== 데이터 마이그레이션 시작 ===')
  await migrateKindergartens()
  await migrateShuttleVehicles()
  console.log('=== 데이터 마이그레이션 완료 ===')
}
