import {Entity, Column, ManyToOne, JoinColumn} from "typeorm";
import {Application} from "../../application/entities/application.entity";
import {VerificationState} from "../../types/verification.state";

@Entity()
export class ApplicationRecipe {
    @ManyToOne(() => Application, (application) => application.uuid)
    @JoinColumn({name: 'application_uuid'})
    application_uuid!: string;

    @Column()
    platform!: string;

    @Column()
    recipe!: object;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;
}