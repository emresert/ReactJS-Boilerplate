let endPointUrlForApi: string = "";

if (process.env.NODE_ENV == "production") {

    endPointUrlForApi = "production"  //  https://.../V1 etc.
    
} else if (process.env.NODE_ENV == "development") {

    endPointUrlForApi = "development" // https://.../V1 etc.

} 
export {endPointUrlForApi}
