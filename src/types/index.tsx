export interface IMenuItem {
    id: number,
    title: MenuTitleType,
    path: string,
}

export enum MenuTitleType {
    MEMBER = "MEMBER",
    ACTIVETY = "ACTIVETY"
}

export interface IMember {
    id: number,
    loginId: string
    name: string,
    authority: AuthorityType,
}

export enum AuthorityType {
    LEVEL1 = "LEVEL1",
    LEVEL2 = "LEVEL2",
    LEVEL3 = "LEVEL3",
}