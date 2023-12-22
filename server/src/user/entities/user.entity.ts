import {BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import UserSettings from "./user-settings.entity";
import Profile from "../../profile/entities/profile.entity";


@Entity()
export class User extends BaseEntity  {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @Column({unique: true})
    name!: string;

    @OneToOne(() => UserSettings, (settings) => settings.user_uuid, {cascade: true})
    settings!: UserSettings;

    @Column({unique: true})
    email!: string;

    @Column()
    password_hash!: string;

    @Column({ type: 'timestamp'})
    created_at!: Date;

    @Column({default: false})
    is_admin!: boolean;
}