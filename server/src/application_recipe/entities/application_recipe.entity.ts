import {Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import {Application} from "../../application/entities/application.entity";
import {VerificationState} from "../../types/verification.state";

@Entity()
export class ApplicationRecipe extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => Application, (application) => application.uuid)
    @JoinColumn({name: 'application_uuid'})
    application!: Application;


    @Column()
    platform!: string;

    @Column({type: 'jsonb', nullable: true})
    recipe!: string[];

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;
}