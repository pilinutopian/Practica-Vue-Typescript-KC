import { RouteLocation } from "vue-router";


const haveAuthGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    
    const accessToken = localStorage.getItem('accessToken')

    if(accessToken) {
        next()
    }else {
        next({name: 'login'})
    }
}

export default haveAuthGuard;