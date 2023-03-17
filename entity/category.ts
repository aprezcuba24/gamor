import { Schema, model, models } from 'mongoose';

export interface ICategory {
  name: string;
}

const userSchema = new Schema<ICategory>({
  name: { type: String, required: true },
});

export const Category = models.Category || model<ICategory>('Category', userSchema);
