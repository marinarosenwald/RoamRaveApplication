//
//  ActivitiesRow.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/27/24.
//

import SwiftUI

struct ActivitiesRow: View {
    var activity: Activities
    
    var body: some View {
        HStack {
            Text(activity.name)
            Spacer()
        }
    }
}

#Preview {
    Group {
        ActivitiesRow(activity: activities[0])
        ActivitiesRow(activity: activities[1])
    }
}
