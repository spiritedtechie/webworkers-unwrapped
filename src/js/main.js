import { applyFilter } from './filter';

const handleFileSelect = evt => {

  let output = [];
  const files = evt.target.files;

  for(let i = 0; i < files.length; i++) {
    let file = files[i];

    output.push('<li><strong>', escape(file.name), '</strong> (', file.type || 'n/a', ') - ',
                file.size, ' bytes, last modified: ',
                file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  };

  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('images-input').addEventListener('change', handleFileSelect, false);
});
