import * as actions from '@/app/rpg/actions';
import * as fs from 'node:fs/promises';

jest.mock('node:fs/promises');
jest.mock('next/cache');

describe('Creating a quest', () => {
    beforeAll(() => {
        fs.readFile.mockResolvedValue(JSON.stringify({}));
    });

    it('returns a newly created quest', async () => {
        const testData = { questTitle: 'test quest', questObj: 'test objective' };
        const formData = new FormData();
        for (const key in testData) {
            formData.append(key, testData[key]);
        }

        const newQuest = await actions.createQuest(formData);

        expect(newQuest).toBeDefined();
        expect(newQuest).not.toBeNull();
    });

    it('has the correct fields', async () => {
        const testData = { questTitle: 'test quest', questObj: 'test objective' };
        const formData = new FormData();
        for (const key in testData) {
            formData.append(key, testData[key]);
        }

        const newQuest = await actions.createQuest(formData);

        expect(newQuest.title).toBe(testData.questTitle);
        expect(newQuest.objective).toBe(testData.questObj);
    });
});

describe('Completing a quest', () => {
    it('marks the quest as completed', async () => {
        const testData = {
            quests: [
                { id: 1, title: 'test quest', objective: 'test objective', completed: false }
            ]
        };
        fs.readFile.mockResolvedValue(JSON.stringify(testData));

        const result = await actions.completeQuest(1);

        expect(result).not.toBeFalsy();
        expect(result.complete).toBe(true);
    });
});