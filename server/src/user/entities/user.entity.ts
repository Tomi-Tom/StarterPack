import {BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import UserSettings from "./user-settings.entity";
import Profile from "../../profile/entities/profile.entity";
import {nullable} from "zod";


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

    @OneToMany(() => Profile, (profile) => profile.owner_id, {cascade: true})
    profiles!: Profile[];

    @Column({nullable : true})
    bio!: string;

    @Column({nullable : true})
    phone!: string;

    @Column({nullable : true})
    country!: string;

    @Column({default: false})
    is_admin!: boolean;
}