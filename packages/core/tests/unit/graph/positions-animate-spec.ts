import '../../../src/behavior';
import Graph from '../implement-graph';

const div = document.createElement('div');
div.id = 'global-spec';
document.body.appendChild(div);

describe('graph', () => {
  const globalGraph = new Graph({
    container: div,
    width: 500,
    height: 500,
    modes: {
      default: ['drag-node'],
    },
  });
  const data = {
    nodes: [
      {
        id: 'node1',
        x: 150,
        y: 50,
        label: 'node1',
      },
      {
        id: 'node2',
        x: 200,
        y: 150,
        label: 'node2',
      },
      {
        id: 'node3',
        x: 100,
        y: 150,
        label: 'node3',
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
      },
      {
        source: 'node2',
        target: 'node3',
      },
      {
        source: 'node3',
        target: 'node1',
      },
    ],
  };
  globalGraph.data(data);
  globalGraph.render();

  it('new & destroy graph', () => { // done
    const inst = new Graph({
      container: div,
      width: 500,
      height: 500,
      modes: {
        default: ['drag-node'],
      },
    });
    const length = div.childNodes.length;
    inst.read(data);

    data.nodes.forEach(node => {
      node.x = node.x + 100;
      node.y = node.y + 100;
    });
    // inst.on('afteranimate', () => {
    //   console.log('after aniamte')
    //   expect(data.nodes[0].x).not.toBe(150);
    //   expect(data.nodes[0].y).not.toBe(50);
    //   done();
    // })
    inst.positionsAnimate();
    // setTimeout(() => {
    //   expect(data.nodes[0].x).not.toBe(150);
    //   expect(data.nodes[0].y).not.toBe(50);
    //   done();
    // }, 500);
  });
});
