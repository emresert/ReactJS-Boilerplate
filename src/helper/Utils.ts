let endPointUrlForApi: any = "";

if (process.env.NODE_ENV == "production") {

    endPointUrlForApi = process.env.PRODUCTION_KEY  //  https://.../V1 etc.
    
} else if (process.env.NODE_ENV == "development") {

    endPointUrlForApi = process.env.DEVELOPMENT_KEY // https://.../V1 etc.

} 
export {endPointUrlForApi}
