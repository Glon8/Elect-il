export const content = {
    footer: {
        us: 'Us',
        encr: 'Encryption',
        appr: 'License',
    },
    header: {
        signin: 'Sign In',
        signout: 'Sign Out',
        welcome: 'Hello!',
    },
    history: {
        title: 'Past elections',
        desc: 'Here displayed votings that past, and you can observe their statistics, by simply choosing a date!',
        search: 'Year',
        nohistory: 'Information is not available',
    },
    opening: {
        title: 'Thank you for trusting us!',
        desc: 'We push toward transparent and SECURE voting, using encryption and a short time and only minor metadata storage!',
    },
    signin: {
        phaseone: {
            title: 'SIGN-IN',
            desc: 'Use your ID number and type it below',
            placeholder: 'ID number',
        },
        phasetwo: {
            title: 'Verification',
            desc: 'Write down the code that you recieved via EMAIL or SMS',
            placeholder: 'Password',
        },
        button: 'Send',
    },
    statistics: {
        title: 'Updated Statistics',
        totalvotes: 'Total voting participants:',
        graphtitle: 'Votes per party:',
        topleaders: 'Top leaders:',
        error: 'Loading',
    },
    voting: {
        title: 'Current Election Participants',
        party: 'Party',
        leader: 'Leader',
        vote: 'Vote',
        error: 'No on going elections right now',
    },
    voteconfirm: {
        title: 'Attention',
        disclaimer: 'By giving your voice here on the platform, you agree, that we keep your voice, for this particular election. Furthurmore, you agree that during processing, your voice ll be split with your personal data(ID). ID ll be stored in ecrypted state, and then deleted by the end of the election. This action unreversable!',
        label: 'I read and understood the note',
        question: 'Are you sure you want to vote for this party?',
        positive: 'YES',
        negative: 'NO',
    },
    langSelector: {
        ru: 'Ru',
        en: 'En',
        he: 'He',
    },
    us: {
        title: 'About Us',
        p1: "This website was created by two people from working-class backgrounds who believe that the next generation of digital elections can be secure, convenient, and comfortable to participate in — without compromising the principles of a traditional election.",
        p2: "Our website provides an easy way to cast your vote digitally, without the need to leave your home, wait in line, or spend hours at a polling station.",
        p3: "Our one-way security approach allows us to store only the data that is relevant to the election, without exposing or retaining clients' IDs. We store only the information necessary for the election process: party profiles and vote counts. During an ongoing election, we retain only hashed versions of client IDs.",
    },
    encryption: {
        title: 'Encryption & Security',
    },
    license: {
        title: '',
    },
};

/*
## Encryption & Security

We take our clients' security very seriously. For this reason, we want to explain how we process and store data throughout the voting process.

We divide the process into two phases: **Ongoing Voting** and **Post-Voting**.

### Ongoing Voting

This is the stage during which a client's ID is used for verification. Most importantly, when you cast your vote, we receive only two pieces of information:

* The name of the party you voted for
* Your hashed ID number

**Important:** We do not store plain-text IDs, and we do not link your identity to your voting preference. By the end of the voting process, these two types of information are kept completely separate.

Your ID is hashed directly on your device before it is sent to our servers. This means that your original ID number never leaves your device and remains private.

### Post-Voting

Once the voting period has ended, all client ID hashes are removed. What remains in storage is only the election results: a list of parties, their party leaders, and the number of votes each party received.

We keep the hashed IDs only until the voting process is complete. A few hours after the election ends, all remaining hashes are permanently erased, leaving no trace of them behind.

We retain the hashes for a few hours after the election so that participants can independently verify that the voting process was legitimate. If participants wish to verify the results and count the votes themselves, we can provide the hashes that were temporarily retained. Those who wish to do so can then verify their own IDs against the list.
*/