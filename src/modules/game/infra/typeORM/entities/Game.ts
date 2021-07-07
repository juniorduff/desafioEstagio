import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("game")
class Game {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Game };
