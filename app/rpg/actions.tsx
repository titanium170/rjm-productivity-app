'use server'
import { Quest } from './quests/quests';
import { revalidatePath } from 'next/cache';
import store from './quests/quest-store';

export async function createQuest(formData: FormData) {
    const title: string = formData.get('questTitle') as string;
    const objective: string = formData.get('questObj') as string;
 

    if (!title || !objective) {
        throw new Error('Required fields are null or empty');
    }

    const newQuest = {
        title,
        objective 
    };
    
    const { quests } = await store.getQuestData();
    const id = quests.toReversed()[0].id + 1;
    quests.push({ id, ...newQuest });
    await store.writeQuestData(quests);
    revalidatePath('/quests');
}


export async function getQuests(): Promise<Quest[]> {
    const questDataObj = await store.getQuestData();
    return questDataObj.quests;
}


// export async function completeQuest(quest: Quest): Promise<void> {
//     const questDataObj = await _getQuestData();
//     questDataObj.quests.find(quest => quest)
// }

