import '@slidev/types';
import type { Person } from './layouts/Person.vue';

declare module '@slidev/types' {
    export interface Frontmatter {
        person?: Person;
        people?: Record<string, Person>;
    }
}
