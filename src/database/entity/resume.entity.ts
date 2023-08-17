import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import IResume from "../model/resume.model";

@Entity()
export class ResumeEntity implements IResume {
  @PrimaryGeneratedColumn()
  id!: number;

  // Introduction
  @Column()
  section_1_heading?: string;

  @Column()
  section_1_1_desc?: string;

  // Experience
  @Column()
  section_2_heading?: string;

  @Column()
  section_2_1_title?: string;

  @Column()
  section_2_1_subTitle?: string;

  @Column()
  section_2_1_desc?: string;

  @Column()
  section_2_2_title?: string;

  @Column()
  section_2_2_subTitle?: string;

  @Column()
  section_2_2_desc?: string;

  @Column()
  section_2_3_title?: string;

  @Column()
  section_2_3_subTitle?: string;

  @Column()
  section_2_3_desc?: string;

  @Column()
  section_2_4_title?: string;

  @Column()
  section_2_4_subTitle?: string;

  @Column()
  section_2_4_desc?: string;

  @Column()
  section_2_5_title?: string;

  @Column()
  section_2_5_subTitle?: string;

  @Column()
  section_2_5_desc?: string;

  // Academic
  @Column()
  section_3_heading?: string;

  @Column()
  section_3_1_title?: string;

  @Column()
  section_3_1_subTitle?: string;

  @Column()
  section_3_1_desc?: string;

  @Column()
  section_3_2_title?: string;

  @Column()
  section_3_2_subTitle?: string;

  @Column()
  section_3_2_desc?: string;

  @Column()
  section_3_3_title?: string;

  @Column()
  section_3_3_subTitle?: string;

  @Column()
  section_3_3_desc?: string;

  @Column({ default: new Date().toDateString() })
  createdAt!: string;

  @Column({ default: new Date().toDateString() })
  updatedAt!: string;
}
