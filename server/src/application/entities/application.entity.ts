import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {VerificationState} from "../../types/verification.state";
import {ApplicationRecipe} from "../../application_recipe/entities/application_recipe.entity";

@Entity()
export class Application {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @OneToMany(() => ApplicationRecipe, (Recipes) => Recipes.application_uuid)
    recipes!: ApplicationRecipe[];

    @Column()
    name!: string;

    @Column({nullable: true})
    creator_uuid!: string;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;
}