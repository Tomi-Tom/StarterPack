import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import UserSettings from "./user-settings.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @Column({unique: true})
    name!: string;

    @OneToOne(() => UserSettings, (settings) => settings.user, {cascade: true})
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