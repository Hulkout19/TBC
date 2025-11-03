export const PROJECT: any = [
    {
        id: 1,
        title: "Designing Plans",
        description: "A story about an architect",
        iconUrl: "/assets/florida1.jpeg",
        active: true,
        storyUrl: "/architect"
    },
    {
        id: 2,
        title: "A Line in the Sand",
        description: "A story about an giant",
        iconUrl: "/assets/florida2.jpeg",
        active: true,
        storyUrl: "/giants"
    },
    {
        id: 3,
        title: "Agent Chaos",
        description: "A story about an agent",
        iconUrl: "/assets/florida3.jpeg",
        active: true,
        storyUrl: "/agent"
    },
    
]

export function findStoryById(storyId:number) {
    return PROJECT.find((story: { id: number; }) => story.id == storyId);
}

export function findAllActiveStories(){
    return PROJECT.find((story: { active: boolean; }) => story.active == true);
}