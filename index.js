
import jobs from './data.json' assert { type: 'json' };

const content = document.querySelector('#content');
const filterDiv = document.createElement('div');
const filtered = [];
const filterName = [];



function display() {

    content.innerHTML = "";
    content.appendChild(filterDiv);
    filterDiv.classList.add('filterDiv');

    for (const item of jobs) {
        const section = document.createElement('section');
        content.appendChild(section);

        const div = document.createElement('div');
        section.appendChild(div);
        section.classList.add('card');

        const logo = document.createElement('img');
        div.appendChild(logo);
        logo.src = item.logo;


        const div2 = document.createElement('div');
        section.appendChild(div2);
        div2.classList.add('info');

        const feature = document.createElement('div');
        div2.appendChild(feature);
        feature.classList.add('feature');

        const h6 = document.createElement('h1');
        h6.textContent = item.company;
        feature.appendChild(h6);
        h6.classList.add('heading');

        const span = document.createElement('span');
        feature.appendChild(span);

        if (item.new === true) {
            const n = document.createElement('a');
            n.textContent = "NEW!";
            span.appendChild(n);
            n.classList.add('new');
        }

        if (item.featured === true) {
            const f = document.createElement('a');
            f.textContent = "FEATURE!";
            span.appendChild(f);
            f.classList.add('black');
        }

        const h5 = document.createElement('h5');
        h5.textContent = item.position;
        div2.appendChild(h5);
        h5.classList.add('position');

        const description = document.createElement('div');
        div2.appendChild(description);
        description.classList.add('description');

        const postA = document.createElement('p');
        const contract = document.createElement('p');
        const location = document.createElement('p');

        description.appendChild(postA);
        postA.textContent = item.postedAt;

        description.appendChild(contract);
        contract.textContent = item.contract;

        description.appendChild(location);
        location.textContent = item.location;

        const keywords = document.createElement('div');
        section.appendChild(keywords);
        keywords.classList.add('keywards');

        const role = document.createElement('a');
        role.textContent = item.role;
        keywords.appendChild(role);
        role.addEventListener('click', () => {
            if (!filterName.includes(role.textContent)) {
                filtered.push(item);
                filterName.push(item.role)
            }
            addFilter();
            filterArr(item.role)
        })

        const level = document.createElement('a');
        level.textContent = item.level;
        keywords.appendChild(level);
        level.addEventListener('click', () => {
            if (!filterName.includes(level.textContent)) {
                filtered.push(item);
                filterName.push(level.textContent);
            }
            addFilter();
            filterArr(item.level);
        })


        for (const language of item.languages) {
            const lang = document.createElement('a');
            lang.textContent = language;
            keywords.appendChild(lang);
            lang.addEventListener('click', () => {
                if (!filterName.includes(language)) {
                    filtered.push(item);
                    filterName.push(language)
                }
                addFilter();
                display(filtered);
                filterArr(item.language);

            })
        }
    }
}

display(jobs);

function addFilter() {
    filterDiv.textContent = '';
    for (const item of filterName) {
        const p = document.createElement('a');
        const span = document.createElement('span');
        const i = document.createElement('i');

        p.textContent = item;
        filterDiv.appendChild(p);
        filterDiv.appendChild(span);
        span.appendChild(i);

        p.classList.add('filterKeyword');
        i.classList.add('fa-solid', 'fa-xmark', 'cross');
    }
}

function filterArr(a) {
    let arr =[];
    for (const item of jobs) {
        if (Object.values(item).includes(a)) {
            arr.push(item);
        }
    }
    console.log(arr); 
      display(arr)
}