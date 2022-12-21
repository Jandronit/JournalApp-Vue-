
export default () =>  ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Voluptate culpa quia, quod, quas, voluptatum quibusdam quidem voluptates quae quos voluptas quas.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Fugiat consequuntur, quod, quas, voluptatum quibusdam quidem voluptates quae quos voluptas quas.',
            picture: null,
        }
    ]
})
