module.exports = {
  someSidebar: {
    'Get Started': [
      'index',
      'join-group',
      'account-creation',
      'account-activation',
    ],
    'Setup': [
      //'setup/index',
      'setup/ssh',
      'setup/intracluster-keys',
      'setup/portforwarding',
      'setup/x11'
      //'setup/vscode',
    ],
    'Storage': [
      'storage/data',
      'storage/gscratch',
      'storage/transfer',
      'storage/archive',
      {
        'Kopah S3 Storage': [
          'storage/kopah',
          'storage/gui',
          'storage/cli',
          'storage/boto3',
        ]
      }
    ],
    'Data Commons':
    [
      'data-commons/requirements',
      'data-commons/imagenet',
      'data-commons/tablib',
      'data-commons/the_pile',
    ],
    'Compute': [
      'compute/start-here',
      'compute/scheduling-jobs',
      'compute/checkpoint',
      'compute/resource-monitoring',
    ],
    'Open OnDemand': [
      'ood/start',
      'ood/schedule-job',
      'ood/matlab',
      'ood/jupyter',
    ],
    'Tools & Software': [
      'tools/software',
      'tools/modules',
      'tools/compilers',
      'tools/containers',
      'tools/squashfs',
      'tools/modules-containers',
      
      {
        'Using GPUs on Hyak': [
          'tools/gpu_start',
          'tools/nvidia_ngc',
          'tools/ollama_setup',
        ]
      },

      'tools/dmtcp',
      'tools/r',
      'tools/python',
      'tools/jupyter',
      'tools/matlab',
      'tools/matemathica',
      {
        'Vs Code': [
          'tools/vscode',
          'tools/vsc-code-server',
          'tools/vsc-proxy-jump',
        ]
      }
    ],
    'Tutorials': [
      {
        'Hyak Basics': [
          'hyak101/basics/syllabus',
          'hyak101/basics/login',
          'hyak101/basics/system',
          'hyak101/basics/linux',
          'hyak101/basics/linux-2',
        ]
      },
      {
        'Containers': [
          'hyak101/containers/syllabus',
          'hyak101/containers/background',
          'hyak101/containers/demonstration',
          'hyak101/containers/build',
        ]
      },
      {
        'Slurm': [
          'hyak101/basics/syllabus_slurm', 
          'hyak101/basics/jobs',
          'hyak101/basics/arrays',
        ]
      },
      {
        'Advanced Slurm': [
          'hyak101/basics/syllabus_advanced',
          'hyak101/basics/advanced', 
          'hyak101/basics/nn_batch',
          'hyak101/basics/nn_array',
          'hyak101/basics/nn_sweep',
        ]
      },
      {
        'Jupyter Notebooks': [
          'hyak101/python/syllabus',
          'hyak101/python/setup',
          'hyak101/python/container',
          'hyak101/python/ssh',
          'hyak101/python/overlay',
          'hyak101/python/slurm-forward',
          'hyak101/python/start-up-seq',
          'hyak101/python/connect-vsc',
          'hyak101/python/interactive',
        ]
      },
    ],
    'Additional Resources': [
      'resources',
      'faq',
      'glossary',
    ],
    'Contribution Guides': [
      'contribute/pull-request',
      'contribute/markdown-guide',
      'contribute/link-markdown',
      'contribute/mdx',
    ],
  }
};
