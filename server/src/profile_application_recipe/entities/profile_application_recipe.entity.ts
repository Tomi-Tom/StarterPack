import {BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Profile from "../../profile/entities/profile.entity";
import {Application} from "../../application/entities/application.entity";


@Entity()
export class ProfileApplicationRecipe   {
    @ManyToOne(() => Profile, (profile) => profile.uuid)
    profile_id!: string;

    @ManyToOne(() => Application, (application) => application.uuid)
    application_id!: string;

    @PrimaryGeneratedColumn('uuid')
    uuid!: string;
}