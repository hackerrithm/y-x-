import { LocalDateTime } from "js-joda";

export default interface IAccessToken {
        readonly id: string;
        readonly accountId: string;
        readonly expires: LocalDateTime;
}
