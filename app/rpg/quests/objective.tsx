'use client'
import Text from "@/components/ui/text";
import { completeQuest } from "../actions";
import { Quest } from "./quests";

const Objective = ({ quest: { objective, id, complete } }: { quest: Quest }) => (
    <div className='flex justify-between'>
        <Text className='text-xs indent-2' tagName='label' for='complete-quest'>{objective}</Text>
        <input
            type="checkbox"
            id={`complete-quest-${id}`}
            checked={complete}
            onClick={async () => (await completeQuest(id))}
        />
    </div>
);

export default Objective;