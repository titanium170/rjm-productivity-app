import Text from "@/app/_components/ui/text";
import { Quest } from "./quests";

type Props = {
    quest: Quest
};

// const Objective = ({ objective }: { objective: string }) => <Text>{objective}</Text>;

export default function QuestWithObjectives({ quest }: Props) {
    return (
        <>
            <h3>
                <Text className='font-light !text-base'>
                   <strong>{quest.title}</strong> 
                </Text>
            </h3>
            <Text className='text-xs indent-2'>{quest.objective}</Text>
        </>
    )
}