import {Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import Profile from "./entities/profile.entity";
import {Repository} from "typeorm";
import {ProfileDto} from "./dto/profile.dto";
import {v4 as uuidv4} from 'uuid';
import {VerificationState} from "../types/verification.state";

@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(Profile)
        private readonly ProfileRepository: Repository<Profile>
    ) {
    }

    async createProfile(profile: ProfileDto): Promise<Profile> {
        try {
            const profileToCreate = {
                name: profile.name,
                description: profile.description,
                owner_id: profile.owner_id,
                verification_state: VerificationState.VERIFIED,
                uuid: uuidv4(),
                created_at: new Date(),
            }
            return await this.ProfileRepository.save(
                profileToCreate
            );
        } catch (e) {
            console.log(e);
            throw new Error("Error creating profile");
        }
    }

    async getProfiles(): Promise<Profile[]> {
        const profiles = await this.ProfileRepository.find();
        if (!profiles) {
            throw new Error("Profiles not found");
        }
        return profiles;
    }

    async getProfile(uuid: string): Promise<Profile> {
        const profile = await this.ProfileRepository.findOne({where: {uuid}});
        if (!profile) {
            throw new Error("Profile not found");
        }
        return profile;
    }

    async updateProfile(uuid: string, profile: ProfileDto): Promise<Profile> {
        const profileToUpdate = await this.getProfile(uuid);
        try {
            profileToUpdate.name = profile.name;
            profileToUpdate.description = profile.description;

            return await this.ProfileRepository.save(profileToUpdate);
        } catch (e) {
            console.log(e);
            throw new Error("Error updating profile");
        }
    }

    async deleteProfile(uuid: string): Promise<void> {
        const profile = await this.getProfile(uuid);
        try {
            await this.ProfileRepository.remove(profile);
        } catch (e) {
            console.log(e);
            throw new Error("Error deleting profile");
        }
    }
}
