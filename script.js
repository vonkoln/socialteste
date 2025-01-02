document.addEventListener("DOMContentLoaded", () => {
// Seleciona o canvas e define o contexto
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Configura as dimensões do canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Caracteres para o efeito Matrix
const texts = ["日", "ﾊ", "ﾐ", "ﾋ", "ｰ", "ｳ", "ｼ", "ﾅ", "ﾓ", "ﾆ", "ｻ", "ﾜ", "ﾂ", "ｵ", "ﾘ", "ｱ", "ﾎ", "ﾃ", "ﾏ", "ｹ", "ﾒ", "ｴ", "ｶ", "ｷ", "ﾑ", "ﾕ", "ﾗ", "ｾ", "ﾈ", "ｽ", "ﾀ", "ﾇ", "ﾍ", ":", "・", ".", "=", "*", "+", "-", "<", ">", "¦", "｜", "ﾘ"];
const fontSize = 16;
const columns = Math.max(1, Math.floor(canvas.width / fontSize)); // Garante um valor válido
const drops = Array(columns).fill(1);

// Função para desenhar o efeito Matrix
function draw() {
    // Cria o efeito de fade
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Define a cor e a fonte dos caracteres
    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px arial`;

    // Desenha os caracteres em posições aleatórias
    for (let i = 0; i < drops.length; i++) {
        const text = texts[Math.floor(Math.random() * texts.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reseta a posição das gotas
        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Atualiza o canvas a cada 33ms
setInterval(draw, 33)
});
