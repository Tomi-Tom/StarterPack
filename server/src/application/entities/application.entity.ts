import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {VerificationState} from "../../types/verification.state";
import {ApplicationRecipe} from "../../application_recipe/entities/application_recipe.entity";

@Entity()
export class Application extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;


    @Column({nullable: true})
    creator_uuid!: string | null;

    @OneToMany(() => ApplicationRecipe, (Recipes) => Recipes.application_uuid)
    recipes!: ApplicationRecipe[];
    @Column()
    name!: string;

    @Column()
    verification_state!: VerificationState;

    @Column({ type: 'timestamp'})
    created_at!: Date;
}