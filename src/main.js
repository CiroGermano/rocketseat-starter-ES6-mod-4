import axios from 'axios';


// 1
const delay = () => new Promise(responseolve => setTimeout(responseolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
}
umPorSegundo();


// 2
async function getUserFromGithub(user) {
    try {
        const responseponse = await axios.get(`https://api.github.com/users/${user}`);
        console.log(responseponse);
    } catch (error) {
        console.log('Catch: Erro na API.');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


// 3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        } catch (error) {
            console.log("getRepositories catch: Falha na API.");
        }
    }
}
Github.getRepositories('Rocketseat/gatsby-themes');
Github.getRepositories('rocketseat/dslkvmskv');


// 4
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response);
    } catch (error) {
        console.log("O usuário não existe.");
    }
}
buscaUsuario('diego3g');