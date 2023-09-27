<template>
    <div>
        <div id="menuBar">
            <div id="logo" >
                <img src="./assets/toplogo.svg" style="width: 200px;">
            </div>
            <div id="menu">
                <ul id="menuList">
                    <li id="notice">공지사항</li>
                    <li id="search">유치원조회</li>
                    <li id="reunion">유치원동창회</li>
                    <li id="mypage">마이페이지</li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>