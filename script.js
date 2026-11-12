// Load the original portfolio script and swap only the Knowledge Graph artwork.
(async () => {
  const originalScriptUrl = 'https://raw.githubusercontent.com/Farah-vx/portfolio/b329e4f3e8424bfb9edb4eb79bdeabfd676971a1/script.js';
  const response = await fetch(originalScriptUrl);
  if (!response.ok) throw new Error(`Could not load the original portfolio script (${response.status}).`);

  let source = await response.text();
  const graphArtwork = /'<div class="graph-art"><svg[\s\S]*?<\/svg><\/div>'/;
  if (!graphArtwork.test(source)) throw new Error('Could not find the original Knowledge Graph artwork.');

  source = source.replace(
    graphArtwork,
    '\'<div class="graph-art"><img src="assets/IOT.png" alt="Knowledge graph about driverless cars and the Internet of Things" loading="lazy"></div>\''
  );
  (0, eval)(source);
})().catch(error => console.error('Portfolio failed to load:', error));
