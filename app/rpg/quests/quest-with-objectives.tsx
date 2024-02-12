import Text from "@/components/ui/text";
import { Quest } from "./quests";
import Objective from "./objective";

type Props = {
    quest: Quest
};


export default function QuestWithObjectives({ quest }: Props) {
    return (
        <>
            <h3>
                <Text className='font-light !text-base'>
                    <strong>{quest.title}</strong>
                </Text>
            </h3>
            <Objective quest={quest} />
        </>
    )
}