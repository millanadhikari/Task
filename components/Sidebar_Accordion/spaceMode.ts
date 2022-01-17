export interface Space {
    _id: Date
    _name: string
    color:string
    icon:  React.ReactElement | undefined
}

export interface Folder {
    _id: Date
    _name:string
}

export interface File {
    _id: Date
    _name:string
}