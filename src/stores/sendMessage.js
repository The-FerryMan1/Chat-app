import { defineStore } from "pinia";
// import {getDatabase, ref, push, onValue} from "firebase/database"
import { ref } from "vue";
import { getAuth } from "firebase/auth";
import { db } from "@/firebase/db";
import { addDoc, serverTimestamp, collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useRouter } from "vue-router";



export const useSendmessage = defineStore('messages', ()=>{


    const router = useRouter()
    const existingMess = ref()
    const rum = ref(null || localStorage.getItem('RoomID'))

    const messageRef = collection(db, 'messages')
   
    const RoomSetter = (RoomID)=>{
        localStorage.setItem('RoomID', RoomID)
        rum.value = RoomID

        router.push({name: 'home'})
        
    }

    const Displaymess = async()=>{
        const queryMessage = query(messageRef, where("room", "==", rum.value), orderBy('createdAt')  )
        console.log(rum.value)
        const unsub = onSnapshot(queryMessage, (snap)=>{
            let messages = []
            snap.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
            })
            existingMess.value = messages

        })
       return ()=> unsub()
       
    }

    const SendMessage = async(data)=>{
        const room = localStorage.getItem('RoomID')
        const auth = getAuth();
        if(data === "") return
       
        console.log(auth.currentUser.email)

        await addDoc(messageRef, {
            email : auth.currentUser.email,
            room,
            content: data,
            createdAt: serverTimestamp() 
        })
    }

    const logics ={
        // misis,
        SendMessage,
        Displaymess,
        existingMess,
        RoomSetter,
        rum
    }

    return logics
})