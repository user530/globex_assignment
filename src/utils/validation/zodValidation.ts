import { z } from 'zod';
import { ValidationService, User } from '../../types';

const UserSchema = z.object({
    name: z.string().min(1, { message: 'Name should not be empty!' }),
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    position_name: z.string(),
    department: z.string(),
    hire_date: z.string(),
});

const UserListSchema = z.array(UserSchema);

export class ZodValidationUsers implements ValidationService<User[]> {
    validate(data: unknown): User[] {
        return UserListSchema.parse(data);
    }
}