import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {VerificationState} from "../../types/verification.state";
import {Application} from "../../application/entities/application.entity";
import {ProfileApplicationRecipe} from "../../profile_application_recipe/entities/profile_application_recipe.entity";

@Entity()
export default class Profile {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @Column({unique: true})
    name!: string;

    @Column()
    description!: string;

    @ManyToMany(() => Application, (application) => application.uuid)
    applications!: Application[];

    @ManyToOne(() => User, (user) => user.uuid)
    owner_id!: string;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;

}