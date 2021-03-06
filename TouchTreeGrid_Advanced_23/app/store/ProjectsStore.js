/*
 * File: app/store/ProjectsStore.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.store.ProjectsStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.projectsStore',

    requires: [
        'TouchTreeGrid.model.Projects'
    ],

    config: {
        model: 'TouchTreeGrid.model.Projects',
        storeId: 'projectsStore',
        root: {
            children: [
                
            ]
        }
    }
});