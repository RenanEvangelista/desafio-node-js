import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('telephones')
class Telephone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  number: number;

  @Column()
  area_code: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.telephones)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Telephone;
