import { Wordler } from '../index';
export declare const testSolver: <T extends {
    word: string;
} = {
    word: string;
}>(wordler: Wordler<T>, words?: string[] | readonly string[]) => {
    duration: number;
    distribution: Record<number, number>;
    average: number;
};
