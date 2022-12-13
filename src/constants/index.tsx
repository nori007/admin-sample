import { 
    IMember,
    AuthorityType,
} from "../types"

export const SAMPLE_MEMBERS: Array<IMember> = [
    {
        id: 1,
        loginId: "member01",
        name: 'member01-name',
        email: "member01@daou.co.kr",
        authority: AuthorityType.LEVEL1,
    },
    {
        id: 2,
        loginId: "member02",
        name: 'member02-name',
        email: "member02@daou.co.kr",
        authority: AuthorityType.LEVEL2,
    },
    {
        id: 3,
        loginId: "member03",
        name: 'member03-name',
        email: "member03@daou.co.kr",
        authority: AuthorityType.LEVEL3,
    }
]