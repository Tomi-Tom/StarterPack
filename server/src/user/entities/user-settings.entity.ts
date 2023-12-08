import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import { User } from "./user.entity";
import { LANG, THEME, Lang, Theme} from "../../types/settings";

@Entity()
export default class UserSettings extends BaseEntity{
    @PrimaryColumn()
    uuid!: string;

    @OneToOne(() => User, (user) => user.settings, {onDelete: "CASCADE"})
    user_uuid!: User;

    @Column({ enum: LANG, type: "enum", default: "en"})
    lang: Lang;

    @Column({enum: THEME, type: "enum", default: "light"})
    theme: Theme;

    @Column({nullable: true})
    picture: string;
}