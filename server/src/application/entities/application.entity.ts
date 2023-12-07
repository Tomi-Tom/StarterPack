import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {VerificationState} from "../../types/verification.state";

@Entity()
export class Application {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @Column()
    name!: string;

    @Column({nullable: true})
    creator_uuid!: string;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;
}