//export const link='http://ec2-34-243-4-177.eu-west-1.compute.amazonaws.com:3002';
export const link= 'https://server.yantranant.in';
// export const link='https://yantra123.herokuapp.com';
// export const link='http://ec2-18-219-2-225.us-east-2.compute.amazonaws.com:3003'

// export const link='http://ec2-34-244-46-254.eu-west-1.compute.amazonaws.com:3002'

// export const link='http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3002';

// export const link='http://localhost:3003';

// export const link='http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3003';

export const getStorage=(item)=>(JSON.parse(localStorage.getItem(item)))

export const setStorage=(item,data)=>(localStorage.setItem(item,JSON.stringify(data)))

export const removeStorage=(item)=>(localStorage.removeItem(item))

// export const getStorage=(item)=>(JSON.parse(localStorage.getItem(item)))

// export const setStorage=(item,data)=>(document.cookie=`uid=JSON.stringify(data))`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   )

// export const removeStorage=(item)=>(localStorage.removeItem(item))


//export const route=(loc)=>(window.location.assign(`https://${window.location.hostname}${window.location.pathname}#${loc}`))
export const route=(loc)=>(window.location=`http://${window.location.hostname}:${window.location.port}${loc}`)
