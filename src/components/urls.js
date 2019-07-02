// export const link='http://ec2-34-243-4-177.eu-west-1.compute.amazonaws.com:3002';

export const link='https://yantra123.herokuapp.com';

// export const link='http://ec2-34-244-46-254.eu-west-1.compute.amazonaws.com:3002'

// export const link='http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3002';

// Aijazuddin Sheikh  9826297864 aijazuddin.seikh@gmail.com
export const getStorage=(item)=>(JSON.parse(localStorage.getItem(item)))

export const setStorage=(item,data)=>(localStorage.setItem(item,JSON.stringify(data)))

export const removeStorage=(item)=>(localStorage.removeItem(item))

// export const getStorage=(item)=>(JSON.parse(localStorage.getItem(item)))

// export const setStorage=(item,data)=>(document.cookie=`uid=JSON.stringify(data))`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   )

// export const removeStorage=(item)=>(localStorage.removeItem(item))


//export const route=(loc)=>(window.location.assign(`https://${window.location.hostname}${window.location.pathname}#${loc}`))
export const route=(loc)=>(window.location=`http://${window.location.hostname}:${window.location.port}${loc}`)