import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToMany(() => ProfileApplicationRecipe, (profileApplicationRecipe) => profileApplicationRecipe.profile_uuid)
    profile_application_recipes!: string[];

    @ManyToOne(() => User, (user) => user.uuid)
    owner_id!: string;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;

}