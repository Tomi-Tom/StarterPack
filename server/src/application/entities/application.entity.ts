import {BaseEntity, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {VerificationState} from "../../types/verification.state";
import {ApplicationRecipe} from "../../application_recipe/entities/application_recipe.entity";
import {User} from "../../user/entities/user.entity";
import {ProfileApplicationRecipe} from "../../profile_application_recipe/entities/profile_application_recipe.entity";
import Profile from "../../profile/entities/profile.entity";

@Entity()
export class Application extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @OneToOne(() => User, (user) => user.uuid)
    creator_uuid!: string | null;

    @OneToMany(() => ApplicationRecipe, (Recipes) => Recipes.application)
    applicationRecipes!: ApplicationRecipe[];

    @ManyToMany(() => Profile , (profile) => profile.uuid)
    profiles!: Profile[];

    @Column()
    name!: string;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;
}