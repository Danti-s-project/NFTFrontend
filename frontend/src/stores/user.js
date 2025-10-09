import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: null,
        username: null,
        fullname: null,
        registrationDate: null,
        language: 'en', // значение по умолчанию
        isPremium: false,
        balance: 0,
        nftSellCourseLessonsCompleted: 0,
        p2pCourseLessonsCompleted: 0,
        scamCourseLessonsCompleted: 0,
        toncoinCourseLessonsCompleted: 0
    })
})
