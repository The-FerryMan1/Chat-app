import { defineStore } from "pinia";
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router';


export const useAuthStore = defineStore('auth', ()=>{

    const currentUser = ref(null)
    const router = useRouter()
  

    const GetUser = async()=>{
        const auth = getAuth()
        const pepe = onAuthStateChanged(auth, (user)=>{
            if(user){
                currentUser.value = user.email

            }else{
                console.log('did not log in')
            }
        })
        return ()=>pepe()
    }

    const Register = async (data, conPass) => {
        if (conPass !== data.password) {
            console.log("mali")
            return
        } else {
            await createUserWithEmailAndPassword(getAuth(), data.email, data.password)
                .then(() => {
                    console.log('successfully registered ')
                    router.push({ name: 'home' })
                })
                .catch((err) => {
                    console.log(err.code)
                    alert(err.message)
                })
        }
    }
    const Login = async (data)=>{
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, data.email, data.password )
        .then(()=>{
            console.log('login successfully')
            router.push({ name: 'add-RoomID'})
        })
        .catch(err =>{
            console.log(err.code)
            alert(err.message)
        })
    }

    const Signout = async()=>{
        const auth = getAuth()
        await signOut(auth).then(()=>{
            
            currentUser.value = null
            console.log('Successfully logout')
            router.push({name: 'login'})
        })
    }

    const logics ={
        Register,
        Login,
        GetUser,
        Signout,
        currentUser

    }

    return logics
})

