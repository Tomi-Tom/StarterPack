import {BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {VerificationState} from "../../types/verification.state";

@Entity()
export default class Profile {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @Column({unique: true})
    name!: string;

    @Column()
    description!: string;

    @ManyToOne(() => User, (user) => user.uuid)
    owner_id!: string;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;
}